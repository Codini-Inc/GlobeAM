import axios from 'axios'
const BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3000'

export async function createContact(contact) {
  try {
    await axios.post(`${BASE_URL}/api/contacts`, contact)
  } catch (err) {
    throw new Error(err.message)
  }
}

export async function getContacts() {
  try {
    const response = await axios.get(`${BASE_URL}/api/contacts`)
    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function deleteContact(id) {
  try {
    await axios.delete(`${BASE_URL}/api/contacts/${id}`)
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function updateContact(id, contact) {
  const fullName = formData.get('fullName')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')
  contact = {
    fullName,
    email,
    phone,
    message
  }
  // if the PUT request is sent with other request data, it will be ignored => it will only accepts these fields
  try {
    await axios.put(`${BASE_URL}/api/contacts/${id}`, contact)
  } catch (error) {
    throw new Error(error.message)
  }
}

export function createUser() {}
