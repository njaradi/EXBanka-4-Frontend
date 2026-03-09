import { Link } from 'react-router-dom'
import useWindowTitle from '../hooks/useWindowTitle'

function HomePage() {
  useWindowTitle('AnkaBanka — Employee Portal')

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="text-center pt-8 pb-4">
        <p className="section-label mb-6">Employee Portal</p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 leading-tight mb-6">
          AnkaBanka Internal
        </h1>
        <div className="gold-divider" />
        <p className="text-slate-500 text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Internal tools and systems for AnkaBanka staff. Sign in with your employee credentials to continue.
        </p>
        <Link to="/login" className="btn-primary">
          Employee Login
        </Link>
      </section>

      {/* Tools */}
      <section>
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-light text-slate-900">Available Tools</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {tools.map((t) => (
            <ToolCard key={t.title} {...t} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ToolCard({ title, description, icon }) {
  return (
    <div className="bg-white p-8 group">
      <div className="text-amber-500 mb-5 text-2xl">{icon}</div>
      <h3 className="font-serif text-xl font-light text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed font-light">{description}</p>
    </div>
  )
}

const tools = [
  {
    icon: '◈',
    title: 'Client Management',
    description: 'View and manage client accounts, documents, and transaction history.',
  },
  {
    icon: '◇',
    title: 'Transaction Processing',
    description: 'Process, review, and approve incoming and outgoing transactions.',
  },
  {
    icon: '◉',
    title: 'Reporting',
    description: 'Generate and export financial reports and compliance documents.',
  },
  {
    icon: '◈',
    title: 'Credit & Loans',
    description: 'Manage loan applications, credit assessments, and repayment schedules.',
  },
  {
    icon: '◇',
    title: 'Risk & Compliance',
    description: 'Monitor flagged accounts, run AML checks, and manage regulatory tasks.',
  },
  {
    icon: '◉',
    title: 'HR & Administration',
    description: 'Internal HR records, leave requests, and staff administration.',
  },
]

export default HomePage
