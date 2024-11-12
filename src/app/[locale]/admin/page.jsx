import { getContacts } from '@/lib/data-service'
import ContactsTable from './ContactsTable'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  const contacts = await getContacts()
  return <ContactsTable contacts={contacts} />
}
