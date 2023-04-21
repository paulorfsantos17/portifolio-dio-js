async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/paulorfsantos17/portifolio-dio-js/main/data/profile.json'
  const fetching = await fetch(url)
  
  return await fetching.json()
}