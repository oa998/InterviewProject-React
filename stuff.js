//Over-fetch the list of staff and reduce it in the browser.  Would be in the 'getStaff()' method:
fetch("http://localhost:8080/ford")
  .then(r=>r.json())
  .then(staffs=>{
    let results = [];

    staffs.forEach((staff)=>{
      let obj = {};
      picked.forEach(pick=> obj[pick.key] = staff[pick.key]);
      results.push(obj);
    })

    this.setState({
      staff : results
    });
  });
