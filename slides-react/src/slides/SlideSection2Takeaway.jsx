const SlideSection2Takeaway = () => (
  <>
    <div className="section-header">
      <span className="section-badge section2">Section 2</span>
      <span className="phase-badge">Takeaway</span>
    </div>
    <h2>It Was Working For You the Whole Time</h2>
    <div className="hero-callout">
      <div className="hero-text">
        The best teams don't just <em>use</em> Cursor — they{' '}
        <span className="hero-highlight">
          teach it how their team works
        </span>.
      </div>
    </div>
    <div className="tiles">
      <div className="tile orange">
        <div className="takeaway-label" style={{ color: 'var(--orange)' }}>
          Remember Being Lost?
        </div>
        <div className="tile-title">
          <span className="highlight-orange">
            You understood a stranger's code in minutes
          </span>
        </div>
        <div className="tile-desc">
          That feeling when you opened someone else's project and had no idea
          what was going on? Ask Mode got you past it in minutes. For real
          engineers, that confusion usually lasts weeks. This is what faster
          onboarding actually looks like.
        </div>
      </div>
      <div className="tile orange">
        <div className="takeaway-label" style={{ color: 'var(--orange)' }}>
          The Invisible Helpers
        </div>
        <div className="tile-title">
          <span className="highlight-orange">
            Skills, Hooks, Bugbot, and MCPs were working behind the scenes
          </span>
        </div>
        <div className="tile-desc">
          Git explained in plain English? A Skill. Blocked from committing
          without a team file? A Hook. PRD written straight to Notion without
          leaving Cursor? That's an MCP — a live connection to external tools.
          Someone configured all of this before you walked in.
        </div>
      </div>
      <div className="tile orange">
        <div className="takeaway-label" style={{ color: 'var(--orange)' }}>
          You Leveled Up
        </div>
        <div className="tile-title">
          <span className="highlight-orange">
            In Section 1 you used AI. In Section 2 you taught it.
          </span>
        </div>
        <div className="tile-desc">
          You created a Rule, a Skill, and a Hook — your own guardrails.
          That's how senior engineers' knowledge sticks around even when
          they're not in the room. The AI carries the standards forward.
        </div>
      </div>
    </div>
    <div className="emphasis-box orange">
      <strong>The takeaway:</strong> Any AI tool can generate code. The
      difference is whether you can teach it your team's way of working —
      so every developer gets the same quality bar, automatically.
    </div>
  </>
)

export default SlideSection2Takeaway
