const getUser = async (username) => {
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  const originalRepos = await reposRes.json();

  const userRes = await fetch(`https://api.github.com/users/${username}`);
  const user = await userRes.json();

  const dontShowRepos = [username];

  const isNotFork = (repo) => !repo.fork;
  const dontShow = (repo) => dontShowRepos.indexOf(repo.name) === -1;
  const extractData = (repo) => ({
    id: repo.id,
    name: repo.name,
    language: repo.language,
  })

  const repos = originalRepos
                  .filter(isNotFork)
                  .filter(dontShow)
                  .map(extractData); 

  return {
    user,
    repos
  }
}

export default getUser;