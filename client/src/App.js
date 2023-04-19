import './App.css';

function App() {
  return (
    <>
      <header>
        <h1 class="trippy-text">V A U L T</h1>
      </header>
      <main>
        <section class="search">
          <input type="text" id="search-input" placeholder="Search question papers..."/>
            <div class="container">


              {/* <!-- this is the cool button --> */}
              <a href="/results" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">BROWSE PAPERS</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
              </a>

            </div>
        </section>
        {/* <!-- <section class="filters">
          <label for="professor">Professor:</label>
          <select id="professor">
            <option value="">All Professors</option>
            <option value="Prof. A">Prof. A</option>
            <option value="Prof. B">Prof. B</option>
            <option value="Prof. C">Prof. C</option>
          </select>
          <label for="branch">Branch:</label>
          <select id="branch">
            <option value="">All Branches</option>
            <option value="Branch A">Branch A</option>
            <option value="Branch B">Branch B</option>
            <option value="Branch C">Branch C</option>
          </select>
          <label for="year">Year:</label>
          <select id="year">
            <option value="">All Years</option>
            <option value="2023">2023</option>

          </select>
        </section>     --> */}

      </main>
    </>
  )
}
 
export default App;