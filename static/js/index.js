const el = document.getElementById('climbingType')

const levelSelectContainer = document.getElementById('levelSelect')

const renderDifficulty = _ => {
  const difficultyList = el.value === 'bouldering'
    ? bouldering()
    : topRoping()
  const select = appendToLevelSelect(difficultyList)
  levelSelectContainer.appendChild(select)
}

const bouldering = _ =>
  ['v0', 'v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9', 'v10']

const topRoping = _ => 
  ['5.10a', '5.10b', '5.10c']

const appendToLevelSelect = list => {
  levelSelectContainer.innerHTML = ''
  const levelSelectEl = document.createElement('select')
  levelSelectEl.setAttribute("id", "difficultyType")
  list.map(el => { 
    let option = document.createElement('option')
    option.value = el  
    option.text = el
    levelSelectEl.appendChild(option)
  })
  return levelSelectEl
}

const pushToDatabase = _ => {
  document.getElementById('form_id').submit()
  const name = document.getElementById('name').value
  const date = document.getElementById('date').value
  const finish = document.getElementById('finish').value
  const routeType = document.getElementById('climbingType').value
  const difficulty = document.getElementById('difficultyType').value
  const data = { name, date, finish, routeType, difficulty }
  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch('/pushToDatabase', config)
}
