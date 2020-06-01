class GitHub {
  constructor() {
    this.client_id = "372456d6f610f120e125";
    this.client_secret = "d7231bd5cc9f88736aa28976120d9299b6e4d211";
    this.repos_count = 10;
    this.repos_sort = `created: asc`;
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
