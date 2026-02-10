const SlideSection1Takeaway = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Takeaway</span>
    </div>
    <h2>What Just Happened</h2>
    <div className="hero-callout">
      <div className="hero-text">
        You just went from{' '}
        <span className="hero-highlight">zero to working software</span> in
        45 minutes — and you're not developers.
      </div>
    </div>
    <div className="tiles">
      <div className="tile cyan">
        <div className="takeaway-label" style={{ color: 'var(--cyan)' }}>
          It's Not Just About Code
        </div>
        <div className="tile-title">
          <span className="highlight-green">
            Cursor helped you think, not just type
          </span>
        </div>
        <div className="tile-desc">
          You wrote a PRD, broke work into tasks, created GitHub issues — all
          before anyone wrote a line of code. Most AI tools start when you start
          coding. Cursor started when you started thinking.
        </div>
      </div>
      <div className="tile cyan">
        <div className="takeaway-label" style={{ color: 'var(--cyan)' }}>
          The Speed Is Real
        </div>
        <div className="tile-title">
          <span className="highlight-green">
            One person built the foundation, five people shipped features
          </span>
        </div>
        <div className="tile-desc">
          Think about what that means for actual engineering teams. The gap
          between "I have an idea" and "I have something to show" just
          collapsed. That changes how fast teams can experiment and iterate.
        </div>
      </div>
      <div className="tile cyan">
        <div className="takeaway-label" style={{ color: 'var(--cyan)' }}>
          The Boring Stuff Disappeared
        </div>
        <div className="tile-title">
          <span className="highlight-green">
            You did real git workflow without learning git
          </span>
        </div>
        <div className="tile-desc">
          Fork, branch, commit, push, PR — you did everything real engineers do
          hundreds of times a week. Through conversation. Nobody memorized a
          command. That's hours of overhead gone, every single day.
        </div>
      </div>
    </div>
    <div className="emphasis-box green">
      <strong>The takeaway:</strong> When a customer says "we already use
      Copilot" — remember that Copilot helped you type faster. Cursor helped
      you plan, build, test, and ship. That's the whole SDLC.
    </div>
  </>
)

export default SlideSection1Takeaway
