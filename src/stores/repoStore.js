// import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useRepoStore = defineStore('repoStore', {
  state: () => ({
    commits: [],
    commitsCount: null,
    isLoading: false,
    isError: false,
  }),
  actions: {
    async fetchCommits() {
      this.isLoading = true;
      try {
        let page = 1;
        let commits = [];
        let response;
        do {
          response = await fetch(`https://api.github.com/repos/gitrobertpm/rpm-portfolio-2024/commits?page=${page}&per_page=100`);
          console.log('response: ', response);
          const data = await response.json();
          const trimmedData = data.map(c => {
            return {
              commit: {
                author: c.commit.author,
                committer: c.commit.committer,
                message: c.commit.message
              }
            };
          })
          console.log('trimmedData: ', trimmedData);
          commits = commits.concat(trimmedData);
          page++;
        } while (response.headers.get('Link')?.includes('rel="next"'));

        this.commits = commits;
        this.commitsCount = commits.length;
        this.isLoading = false;
        this.isError = false;
      } catch (error) {
        console.error('Error fetching commits:', error);
        this.isLoading = false;
        this.isError = true;
      }
    },
    getCommits() {
      if (this.commits.length === 0 && !this.isLoading && !this.isError) {
        this.fetchCommits();
      }
    },
  },
});
