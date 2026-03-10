import { useParams, Link } from 'react-router-dom'
import useWindowTitle from '../hooks/useWindowTitle'
import { mockEmployees } from '../mocks/employees'

export default function EmployeeDetailPage() {
  const { id } = useParams()
  const emp = mockEmployees.find((e) => e.id === Number(id))

  useWindowTitle(emp ? `${emp.fullName} | AnkaBanka` : 'Employee | AnkaBanka')

  if (!emp) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-4">Not Found</p>
        <h1 className="font-serif text-4xl font-light text-slate-900 dark:text-white mb-6">Employee not found</h1>
        <Link to="/admin/employees" className="btn-primary">Back to List</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-16">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          to="/admin/employees"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-10"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All Employees
        </Link>

        {/* Header */}
        <p className="text-xs tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-4">
          {emp.department}
        </p>
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-serif text-4xl font-light text-slate-900 dark:text-white">{emp.fullName}</h1>
          <span className={`inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide rounded-full ${
            emp.active
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
              : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
          }`}>
            {emp.active ? 'Active' : 'Inactive'}
          </span>
        </div>
        <div className="w-10 h-px bg-violet-500 dark:bg-violet-400 mb-8" />

        {/* Details card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm space-y-1">
          <Section title="Personal">
            <Row label="First Name"    value={emp.firstName} />
            <Row label="Last Name"     value={emp.lastName} />
            <Row label="Date of Birth" value={emp.dateOfBirth} />
            <Row label="Gender"        value={emp.gender} />
          </Section>

          <Section title="Contact">
            <Row label="Email"        value={emp.email} />
            <Row label="Phone"        value={emp.phoneNumber} />
            <Row label="Address"      value={emp.address} />
          </Section>

          <Section title="Employment">
            <Row label="Username"   value={emp.username} />
            <Row label="Position"   value={emp.position} />
            <Row label="Department" value={emp.department} />
            <Row label="Employee ID" value={String(emp.id)} />
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="pb-4">
      <p className="text-xs tracking-widest uppercase text-violet-600 dark:text-violet-400 pt-6 pb-3">{title}</p>
      <div className="space-y-0">{children}</div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
      <span className="text-xs tracking-widest uppercase text-slate-500 dark:text-slate-400">{label}</span>
      <span className="text-sm text-slate-900 dark:text-white font-medium">{value}</span>
    </div>
  )
}
