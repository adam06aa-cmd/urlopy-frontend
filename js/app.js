const API_URL = 'https://urlopy-backend-production.up.railway.app/api';

const API = {
  async login(email, password) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return res.json();
  },

  async getRequests() {
    const res = await fetch(`${API_URL}/requests`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async approveRequest(id, adminNote) {
    const res = await fetch(`${API_URL}/requests/${id}/approve`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ admin_note: adminNote })
    });
    return res.json();
  },

  async rejectRequest(id, adminNote) {
    const res = await fetch(`${API_URL}/requests/${id}/reject`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ admin_note: adminNote })
    });
    return res.json();
  },

  async getEmployeeReport(userId, date_from, date_to) {
    const res = await fetch(`${API_URL}/requests/employee/${userId}?date_from=${date_from}&date_to=${date_to}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async getReport(date_from, date_to) {
    const res = await fetch(`${API_URL}/requests/report?date_from=${date_from}&date_to=${date_to}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async getRequestOverlap(id) {
    const res = await fetch(`${API_URL}/requests/${id}/overlap`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async updateRequest(id, data) {
    const res = await fetch(`${API_URL}/requests/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async getMe() {
    const res = await fetch(`${API_URL}/users/me`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async createRequest(start_date, end_date, typ_urlopu, reason) {
    const res = await fetch(`${API_URL}/requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ start_date, end_date, typ_urlopu, reason })
    });
    return res.json();
  },

  async getUsers(showAll = false) {
    const res = await fetch(`${API_URL}/users${showAll ? '?all=true' : ''}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async zwolnijUser(id, data_zwolnienia) {
    const res = await fetch(`${API_URL}/users/${id}/zwolnij`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ data_zwolnienia })
    });
    return res.json();
  },

  async przywrocUser(id) {
    const res = await fetch(`${API_URL}/users/${id}/przywroc`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async createUser(name, email, password, etat, urlop_wymiar, urlop_zalegly, stanowisko = '', login = '', data_zatrudnienia = null, data_badan = null, waznosc_badan = null) {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ name, email, password, etat, urlop_wymiar, urlop_zalegly, stanowisko, login: login || null, data_zatrudnienia, data_badan, waznosc_badan })
    });
    return res.json();
  },

  async updateUser(id, name, email, new_password, stanowisko = '', login = '', data_zatrudnienia = null, data_badan = null, waznosc_badan = null) {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ name, email, stanowisko, login: login || null, new_password: new_password || undefined, data_zatrudnienia, data_badan, waznosc_badan })
    });
    return res.json();
  },

  async updatePassword(id, new_password) {
    const res = await fetch(`${API_URL}/users/${id}/password`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ new_password })
    });
    return res.json();
  },

  async updateUserLeave(id, etat, urlop_wymiar, urlop_zalegly) {
    const res = await fetch(`${API_URL}/users/${id}/urlop`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ etat, urlop_wymiar, urlop_zalegly })
    });
    return res.json();
  },

  async deleteUser(id) {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async getLeaveTypes() {
    const res = await fetch(`${API_URL}/leave-types`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async createLeaveType(data) {
    const res = await fetch(`${API_URL}/leave-types`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async updateLeaveType(id, data) {
    const res = await fetch(`${API_URL}/leave-types/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async adminCreateRequest(user_id, start_date, end_date, typ_urlopu, reason, status) {
    const res = await fetch(`${API_URL}/requests/admin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ user_id, start_date, end_date, typ_urlopu, reason, status })
    });
    return res.json();
  },

  async deleteRequest(id) {
    const res = await fetch(`${API_URL}/requests/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  },

  async deleteLeaveType(id) {
    const res = await fetch(`${API_URL}/leave-types/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    return res.json();
  }
};
