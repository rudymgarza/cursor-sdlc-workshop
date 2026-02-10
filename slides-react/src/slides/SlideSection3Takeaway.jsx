const SlideSection3Takeaway = () => (
  <>
    <div className="section-header">
      <span className="section-badge section3">Section 3</span>
      <span className="phase-badge">Takeaway</span>
    </div>
    <h2>This Is Why Process Matters</h2>
    <div className="hero-callout">
      <div className="hero-text">
        You just felt what happens when{' '}
        <span className="hero-highlight">
          20+ people hit the same codebase at once
        </span>. Some teams thrived. Some didn't.
      </div>
    </div>
    <div className="tiles">
      <div className="tile purple">
        <div className="takeaway-label" style={{ color: 'var(--purple)' }}>
          Chaos or Coordination
        </div>
        <div className="tile-title">
          <span className="highlight-purple">
            The teams with process shipped more — and faster
          </span>
        </div>
        <div className="tile-desc">
          Same codebase, same tools, same time. The difference was whether
          people coordinated — clear branches, small PRs, rules that kept
          everyone in line. That's not bureaucracy. That's how real teams
          move fast without breaking things.
        </div>
      </div>
      <div className="tile purple">
        <div className="takeaway-label" style={{ color: 'var(--purple)' }}>
          A Platform, Not Just a Tool
        </div>
        <div className="tile-title">
          <span className="highlight-purple">
            The customization you built? That's the enterprise story.
          </span>
        </div>
        <div className="tile-desc">
          Rules, Skills, Hooks, Bugbot — each one solves a real problem at
          scale. Model agnostic means best model for every task with no vendor
          lock-in. This is what "executing an AI strategy" actually looks like
          in practice, not in a pitch deck.
        </div>
      </div>
      <div className="tile purple">
        <div className="takeaway-label" style={{ color: 'var(--purple)' }}>
          You Lived the Whole Platform
        </div>
        <div className="tile-title">
          <span className="highlight-purple">
            Every feature you used today has a customer story
          </span>
        </div>
        <div className="tile-desc">
          Plan Mode, Ask Mode, Agent Mode, Rules, Skills, Hooks, Bugbot,
          GitHub — you didn't read about these in a doc. You used them under
          pressure, with real stakes, and hit real friction. That's the kind
          of experience that changes how you talk to customers.
        </div>
      </div>
    </div>
    <div className="emphasis-box purple">
      <strong>The struggles you felt today become the most authentic customer
      conversations you'll ever have.</strong>
    </div>
  </>
)

export default SlideSection3Takeaway
