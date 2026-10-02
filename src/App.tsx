import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
const [accountType, setAccountType] = useState("All Accounts");
const [dateRange, setDateRange] = useState("Last 30 Days");
  const accountData = {
    "All Accounts": {
      balance: "₹4,25,300",
      accountNumber: "All Accounts",
    },
    "Saving Account": {
      balance: "₹2,50,000",
      accountNumber: "XXXX XXXX 4582",
    },
    "Current Account": {
      balance: "₹1,75,300",
      accountNumber: "XXXX XXXX 7821",
    },
  };

  const dateData = {
    "Last 7 Days": {
      income: "₹12,500",
      expenses: "₹4,250",
      investment: "₹8,25,000",
    },
    "Last 30 Days": {
      income: "₹45,000",
      expenses: "₹17,090",
      investment: "₹8,75,300",
    },
    "Last 1 Year": {
      income: "₹5,40,000",
      expenses: "₹2,05,000",
      investment: "₹9,20,000",
    },
  };

  const selectedAccount =
    accountData[accountType as keyof typeof accountData];

  const selectedDate =
    dateData[dateRange as keyof typeof dateData];
return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">F</div>
          <span>FinTech</span>
        </div>

        <nav>
          <a
  className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
  onClick={() => setActivePage("dashboard")}
>
  📊 Dashboard
</a>
          <a
  className={`nav-item ${activePage === "accounts" ? "active" : ""}`}
  onClick={() => setActivePage("accounts")}
>
  💰 Accounts
</a>
          <a
  className={`nav-item ${activePage === "transactions" ? "active" : ""}`}
  onClick={() => setActivePage("transactions")}
>
  💳 Transactions
</a>
          <a
  className={`nav-item ${activePage === "investments" ? "active" : ""}`}
  onClick={() => setActivePage("investments")}
>
  📊 Investments
</a>

<a
  className={`nav-item ${activePage === "loans" ? "active" : ""}`}
  onClick={() => setActivePage("loans")}
>
  🏠 Loans
</a>

<a
  className={`nav-item ${activePage === "reports" ? "active" : ""}`}
  onClick={() => setActivePage("reports")}
>
  📊 Reports
</a>
</nav>


        <div className="sidebar-bottom">

    <a
      className={`nav-item ${activePage === "settings" ? "active" : ""}`}
      onClick={() => setActivePage("settings")}
    >
      ⚙️ Settings
    </a>

    <a
      className={`nav-item ${activePage === "help" ? "active" : ""}`}
      onClick={() => setActivePage("help")}
    >
      ❓ Help
    </a>

  </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        
        {activePage === "accounts" && (
  <section className="page-content">
    <h1>Accounts</h1>
    <p>Manage your bank accounts and balances.</p>

    <div className="account-card">
      <h2>Saving Account</h2>
      <p>Account Number: **** 4582</p>
      <h3>₹2,50,000</h3>
      <span>Active</span>
    </div>

    <div className="account-card">
      <h2>Current Account</h2>
      <p>Account Number: **** 7821</p>
      <h3>₹1,75,300</h3>
      <span>Active</span>
    </div>
  </section>
)}
{activePage === "transactions" && (
  <section className="page-content">
    <h1>Transactions</h1>
    <p>Recent account transactions</p>

    <div className="transaction-row">
      <span>Amazon Purchase</span>
      <span>01 Oct 2026</span>
      <strong>-₹4,250</strong>
      <span>Completed</span>
    </div>

    <div className="transaction-row">
      <span>Mutual Fund SIP</span>
      <span>30 Sep 2026</span>
      <strong>-₹10,000</strong>
      <span>Completed</span>
    </div>

    <div className="transaction-row">
      <span>Salary Credit</span>
      <span>30 Sep 2026</span>
      <strong>+₹45,000</strong>
      <span>Completed</span>
    </div>
  </section>
)}
{activePage === "investments" && (
  <section className="page-content">
    <h1>Investments</h1>
    <p>Manage your investments and portfolio.</p>

    <div className="account-card">
      <h2>Stock Investments</h2>
      <p>Current Value: ₹3,67,626</p>
      <span>+12.5% Returns</span>
    </div>

    <div className="account-card">
      <h2>Mutual Funds</h2>
      <p>Current Value: ₹2,45,084</p>
      <span>+9.8% Returns</span>
    </div>

    <div className="account-card">
      <h2>Gold</h2>
      <p>Current Value: ₹1,57,554</p>
      <span>+7.2% Returns</span>
    </div>
  </section>
)}

{activePage === "loans" && (
  <section className="page-content">
    <h1>Loans</h1>
    <p>Manage your loans and repayments.</p>

    <div className="account-card">
      <h2>Personal Loan</h2>
      <p>Outstanding Amount: ₹2,50,000</p>
      <p>Monthly EMI: ₹12,500</p>
      <span>Active</span>
    </div>

    <div className="account-card">
      <h2>Home Loan</h2>
      <p>Outstanding Amount: ₹8,00,000</p>
      <p>Monthly EMI: ₹18,000</p>
      <span>Active</span>
    </div>
  </section>
)}

{activePage === "reports" && (
  <section className="reports-page">

    <div className="reports-header">
      <div>
        <h1>Financial Reports</h1>
        <p>View your income, expenses and investment performance.</p>
      </div>

      <select>
        <option>Last 30 Days</option>
        <option>Last 3 Months</option>
        <option>Last 1 Year</option>
      </select>
    </div>

    {/* Summary Cards */}
    <div className="report-cards">

      <div className="report-card">
        <span>Total Income</span>
        <h2>₹45,000</h2>
        <p className="green">↑ 12.5% from last month</p>
      </div>

      <div className="report-card">
        <span>Total Expenses</span>
        <h2>₹17,090</h2>
        <p className="red">↑ 4.2% from last month</p>
      </div>

      <div className="report-card">
        <span>Net Savings</span>
        <h2>₹27,910</h2>
        <p className="green">58.2% savings rate</p>
      </div>

      <div className="report-card">
        <span>Total Investments</span>
        <h2>₹8,75,300</h2>
        <p className="green">↑ 15.7% returns</p>
      </div>

    </div>

    {/* Charts */}
    <div className="report-grid">

      {/* Income vs Expenses */}
      <div className="report-box">
        <h2>Income vs Expenses</h2>
        <p>Monthly financial performance</p>

        <div className="bar-chart">

          <div className="bar-group">
            <div className="bar income" style={{height: "150px"}}></div>
            <div className="bar expense" style={{height: "90px"}}></div>
            <small>Jan</small>
          </div>

          <div className="bar-group">
            <div className="bar income" style={{height: "125px"}}></div>
            <div className="bar expense" style={{height: "75px"}}></div>
            <small>Feb</small>
          </div>

          <div className="bar-group">
            <div className="bar income" style={{height: "175px"}}></div>
            <div className="bar expense" style={{height: "100px"}}></div>
            <small>Mar</small>
          </div>

          <div className="bar-group">
            <div className="bar income" style={{height: "140px"}}></div>
            <div className="bar expense" style={{height: "85px"}}></div>
            <small>Apr</small>
          </div>

          <div className="bar-group">
            <div className="bar income" style={{height: "185px"}}></div>
            <div className="bar expense" style={{height: "105px"}}></div>
            <small>May</small>
          </div>

          <div className="bar-group">
            <div className="bar income" style={{height: "155px"}}></div>
            <div className="bar expense" style={{height: "80px"}}></div>
            <small>Jun</small>
          </div>

        </div>

        <div className="chart-legend">
          <span><i className="income-dot"></i> Income</span>
          <span><i className="expense-dot"></i> Expenses</span>
        </div>
      </div>


      {/* Investment Allocation */}
      <div className="report-box">
        <h2>Investment Allocation</h2>
        <p>Current portfolio distribution</p>

        <div className="investment-chart">

          <div className="pie-chart"></div>

          <div className="investment-list">

            <div>
              <span>Stocks</span>
              <strong>42%</strong>
            </div>

            <div>
              <span>Mutual Funds</span>
              <strong>28%</strong>
            </div>

            <div>
              <span>Gold</span>
              <strong>18%</strong>
            </div>

            <div>
              <span>Fixed Deposit</span>
              <strong>12%</strong>
            </div>

          </div>

        </div>

        <h2 className="portfolio-value">₹8,75,300</h2>
        <p>Total Portfolio Value</p>

      </div>

    </div>


    {/* Financial Summary */}
    <div className="report-box financial-summary">

      <h2>Financial Summary</h2>

      <div className="summary-row">
        <span>Total Income</span>
        <strong className="green">₹45,000</strong>
      </div>

      <div className="summary-row">
        <span>Total Expenses</span>
        <strong className="red">₹17,090</strong>
      </div>

      <div className="summary-row">
        <span>Net Savings</span>
        <strong className="green">₹27,910</strong>
      </div>

      <div className="summary-row">
        <span>Investment Value</span>
        <strong>₹8,75,300</strong>
      </div>

    </div>

  </section>
)}
        {activePage === "dashboard" && (
  <>
        <header className="header">
          <div>
            <h1>Financial Dashboard</h1>
            <p>Welcome back! Here's your financial overview.</p>
          </div>

          <div className="profile">
            <div className="notification">🔔</div>
            <div className="avatar">OP</div>
            <div>
              <strong>Om Prakash</strong>
              <small>Account Holder</small>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="filters">
          <select
  value={accountType}
  onChange={(e) => setAccountType(e.target.value)}
>
  <option>All Accounts</option>
  <option>Saving Account</option>
  <option>Current Account</option>
</select>

          <select
  value={dateRange}
  onChange={(e) => setDateRange(e.target.value)}
>
  <option>Last 7 Days</option>
  <option>Last 30 Days</option>
  <option>Last 1 Year</option>
</select>
        </div>

        {/* KPI Cards */}
        <section className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-top">
              <span>Total Balance</span>
              <span className="kpi-icon">₹</span>
            </div>
            <h2>{selectedAccount.balance}</h2>
            <p className="positive">↑ 8.4% from last month</p>
          </div>

          <div className="kpi-card">
            <div className="kpi-top">
              <span>Total Income</span>
              <span className="kpi-icon">↗</span>
            </div>
            <h2>{selectedDate.income}</h2>
            <p className="positive">↑ 12.5% from last month</p>
          </div>

          <div className="kpi-card">
            <div className="kpi-top">
              <span>Total Expenses</span>
              <span className="kpi-icon">↘</span>
            </div>
            <h2>{selectedDate.expenses}</h2>
            <p className="negative">↑ 4.2% from last month</p>
          </div>

          <div className="kpi-card">
            <div className="kpi-top">
              <span>Investments</span>
              <span className="kpi-icon">📈</span>
            </div>
            <h2>{selectedDate.investment}</h2>
            <p className="positive">↑ 15.7% returns</p>
          </div>
        </section>

        {/* Charts */}
        <section className="content-grid">
          <div className="panel large-panel">
            <div className="panel-header">
              <div>
                <h3>Income vs Expenses</h3>
                <p>Monthly financial performance</p>
              </div>
              <button>2026 ▾</button>
            </div>

            <div className="chart">
              <div className="chart-line income-line">
                <span>₹3L</span>
                <span>₹2L</span>
                <span>₹1L</span>
                <span>₹0</span>
              </div>

              <div className="bars">
                <div className="bar-group">
                  <div className="bar income" style={{ height: "80%" }} />
                  <div className="bar expense" style={{ height: "45%" }} />
                  <small>Jan</small>
                </div>

                <div className="bar-group">
                  <div className="bar income" style={{ height: "65%" }} />
                  <div className="bar expense" style={{ height: "40%" }} />
                  <small>Feb</small>
                </div>

                <div className="bar-group">
                  <div className="bar income" style={{ height: "90%" }} />
                  <div className="bar expense" style={{ height: "55%" }} />
                  <small>Mar</small>
                </div>

                <div className="bar-group">
                  <div className="bar income" style={{ height: "72%" }} />
                  <div className="bar expense" style={{ height: "48%" }} />
                  <small>Apr</small>
                </div>

                <div className="bar-group">
                  <div className="bar income" style={{ height: "95%" }} />
                  <div className="bar expense" style={{ height: "60%" }} />
                  <small>May</small>
                </div>

                <div className="bar-group">
                  <div className="bar income" style={{ height: "85%" }} />
                  <div className="bar expense" style={{ height: "50%" }} />
                  <small>Jun</small>
                </div>
              </div>
            </div>

            <div className="legend">
              <span><i className="income-dot" /> Income</span>
              <span><i className="expense-dot" /> Expenses</span>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <h3>Portfolio</h3>
                <p>Investment allocation</p>
              </div>
            </div>

            <div className="portfolio-total">₹8,75,300</div>

            <div className="portfolio-list">
              <div>
                <span>Stocks</span>
                <strong>42%</strong>
              </div>
              <div className="progress">
                <span style={{ width: "42%" }} />
              </div>

              <div>
                <span>Mutual Funds</span>
                <strong>28%</strong>
              </div>
              <div className="progress">
                <span style={{ width: "28%" }} />
              </div>

              <div>
                <span>Gold</span>
                <strong>18%</strong>
              </div>
              <div className="progress">
                <span style={{ width: "18%" }} />
              </div>

              <div>
                <span>Fixed Deposit</span>
                <strong>12%</strong>
              </div>
              <div className="progress">
                <span style={{ width: "12%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Transactions */}
        <section className="panel transactions">
          <div className="panel-header">
            <div>
              <h3>Recent Transactions</h3>
              <p>Your latest financial activities</p>
            </div>

            <button className="view-button">View All</button>
          </div>

          <div className="transaction-row header-row">
            <span>Description</span>
            <span>Category</span>
            <span>Date</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

          <div className="transaction-row">
            <span>Salary Credit</span>
            <span>Income</span>
            <span>02 Oct 2026</span>
            <strong className="positive">+₹85,000</strong>
            <span className="status success">Completed</span>
          </div>

          <div className="transaction-row">
            <span>Amazon Purchase</span>
            <span>Shopping</span>
            <span>01 Oct 2026</span>
            <strong className="negative">-₹4,250</strong>
            <span className="status success">Completed</span>
          </div>

          <div className="transaction-row">
            <span>Mutual Fund SIP</span>
            <span>Investment</span>
            <span>30 Sep 2026</span>
            <strong className="negative">-₹10,000</strong>
            <span className="status success">Completed</span>
          </div>

          <div className="transaction-row">
            <span>Electricity Bill</span>
            <span>Utilities</span>
            <span>28 Sep 2026</span>
            <strong className="negative">-₹2,840</strong>
            <span className="status success">Completed</span>
          </div>
        </section>
        </>
        )}
      </main>
    </div>
  );
}

export default App;