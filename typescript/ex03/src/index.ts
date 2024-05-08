//fazer uma requisão através da api do github URL: https://api.github.com/users/Mathsiqueir

interface GithubUserResponse {
    id: number,
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    repos_url: string,
    message?: "Not Found"
}

interface GithubRepoResponse {
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}

const users: GithubUserResponse[] = []


async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    //transformand 
    const user: GithubUserResponse = await response.json()

    if (user.message) {
        console.log('usuario não encontrado!')
    } else {
        users.push(user)

        alert(
            `O usuário ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`
        )
    }
}

//função de exibir repositóriio

async function showUserRepos(username: string) {
    const user = users.find(user => user.login === username)

    if (typeof user === 'undefined') {
        console.log('usuario não encontrado')
    } else {
        const response = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await response.json()


        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`

        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
        })
        console.log(message)

    }
}

//parte 2

function showAllUsers() {
    let message = 'usuários:\n'

    users.forEach(user => {
        message += `\n${user.login}`
    })

    alert(message)
}

function showReposTotal() {
    const reposTotal =
        users.reduce((acc, user) => acc + user.public_repos, 0)

    alert(`o grupo possui um total de ${reposTotal} repositórios`)
}

function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)

    //.slice(0, 5) para obter os 5 primeiros
    let message = 'Top 5 usuários com mais repositórios públicos:\n'

    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`
    })

    alert(message)
}

//criar um função para declarar os usuarios automaticamente

async function main() {
    await fetchUser('isaacpontes')
    await fetchUser('julianaconde')
    await fetchUser('pcaldass')
    await fetchUser('lucasqueirogaa')
    await fetchUser('frans203')
    await fetchUser('LeDragoX')

    await showUserRepos('isaacpontes')
    await showUserRepos('julianaconde')

    showAllUsers()
    showReposTotal()
    showTopFive()
}

main()