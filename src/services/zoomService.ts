interface MeetingScheduleRequest {
  startTime: string;
  duration?: number;
  topic?: string;
  timezone?: string;
  sellerId: string;
  gigId: string;
}

interface MeetingResponse {
  meetingId: string;
  joinUrl: string;
  startUrl: string;
  topic: string;
  startTime: string;
  duration: number;
  password: string;
  id: string;
}

interface Meeting {
  id: string;
  meeting_id: string;
  topic: string;
  start_time: string;
  duration: number;
  join_url: string;
  start_url: string;
  password: string;
  buyer_id: string;
  seller_id: string;
  gig_id: string;
  status: 'scheduled' | 'started' | 'completed' | 'cancelled' | 'joined';
  buyer_name: string;
  buyer_email: string;
  seller_name: string;
  seller_email: string;
  gig_title: string;
  created_at: string;
  updated_at: string;
}

class ZoomService {
  private baseURL: string;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}/zoom${endpoint}`;
    
    // Get auth token from localStorage or Clerk
    const token = localStorage.getItem('authToken') || '';
    
    // For development/testing, use a mock token if none exists
    const authToken = token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMCIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTcwMzE2MDAwMCwiZXhwIjoxNzAzMjQ2NDAwfQ.valid_signature';
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error('Zoom API request failed:', error);
      throw error;
    }
  }

  /**
   * Schedule a new Zoom meeting
   */
  async scheduleMeeting(meetingData: MeetingScheduleRequest): Promise<MeetingResponse> {
    return this.request<MeetingResponse>('/meetings', {
      method: 'POST',
      body: JSON.stringify(meetingData),
    });
  }

  /**
   * Get user's meetings
   */
  async getMeetings(
    page: number = 1,
    limit: number = 10,
    role: 'buyer' | 'seller' = 'buyer'
  ): Promise<Meeting[]> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      role,
    });

    return this.request<Meeting[]>(`/meetings?${params}`);
  }

  /**
   * Get meeting details
   */
  async getMeeting(meetingId: string): Promise<any> {
    return this.request(`/meetings/${meetingId}`);
  }

  /**
   * Update meeting
   */
  async updateMeeting(meetingId: string, updateData: any): Promise<any> {
    return this.request(`/meetings/${meetingId}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData),
    });
  }

  /**
   * Cancel meeting
   */
  async cancelMeeting(meetingId: string): Promise<void> {
    return this.request(`/meetings/${meetingId}`, {
      method: 'DELETE',
    });
  }

  /**
   * Join meeting
   */
  async joinMeeting(meetingId: string): Promise<{ joinUrl: string; password: string }> {
    return this.request<{ joinUrl: string; password: string }>(`/meetings/${meetingId}/join`, {
      method: 'POST',
    });
  }

  /**
   * Format date for display
   */
  formatMeetingDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  /**
   * Get time until meeting
   */
  getTimeUntilMeeting(startTime: string): string {
    const now = new Date();
    const meetingTime = new Date(startTime);
    const diff = meetingTime.getTime() - now.getTime();

    if (diff < 0) {
      return 'Meeting has passed';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ${hours} hour${hours > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
  }

  /**
   * Check if meeting is starting soon (within 15 minutes)
   */
  isMeetingStartingSoon(startTime: string): boolean {
    const now = new Date();
    const meetingTime = new Date(startTime);
    const diff = meetingTime.getTime() - now.getTime();
    const minutesUntilMeeting = diff / (1000 * 60);
    
    return minutesUntilMeeting <= 15 && minutesUntilMeeting > 0;
  }

  /**
   * Check if meeting is ongoing
   */
  isMeetingOngoing(startTime: string, duration: number): boolean {
    const now = new Date();
    const meetingTime = new Date(startTime);
    const endTime = new Date(meetingTime.getTime() + duration * 60 * 1000);
    
    return now >= meetingTime && now <= endTime;
  }

  /**
   * Get meeting status badge color
   */
  getStatusColor(status: string): string {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'started':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'joined':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  /**
   * Validate meeting schedule data
   */
  validateMeetingData(data: MeetingScheduleRequest): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.startTime) {
      errors.push('Start time is required');
    } else {
      const startTime = new Date(data.startTime);
      const now = new Date();
      if (startTime <= now) {
        errors.push('Start time must be in the future');
      }
    }

    if (!data.sellerId) {
      errors.push('Seller ID is required');
    }

    if (!data.gigId) {
      errors.push('Gig ID is required');
    }

    if (data.duration && (data.duration < 15 || data.duration > 480)) {
      errors.push('Duration must be between 15 and 480 minutes');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

export const zoomService = new ZoomService();
export type { MeetingScheduleRequest, MeetingResponse, Meeting }; 