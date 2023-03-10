import PostsRoutes from '../services/posts'

export const posts = {
  namespaced: true,
  state: {
    allPosts: '',
    allComments: '',
    postsReport: '',
    postInfo: '',
    likes: '',
    allPostsFromUser: '',
    emojis: ['๐', '๐', '๐', '๐', '๐', '๐', '๐คฃ', '๏ธ๐',
      '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅฐ', '๐', '๐',
      '๐', '๐', '๐', '๐', '๐', '๐', '๐คช', '๐คจ', '๐ง', '๐ค',
      '๐', '๐คฉ', '๐ฅณ', '๐', '๐', '๐', '๐', '๐', '๐', '๐',
      '๐ฃ', '๐', '๐ซ', '๐ฉ', '๐ฅบ', '๐ข', '๐ญ', '๐ค', '๐ ', '๐ก',
      '๐คฌ', '๐คฏ', '๐ณ', '๐ฅต', '๐ฅถ', '๐ฑ', '๐จ', '๐ฐ', '๐ฅ', '๐',
      '๐ค', '๐ค', '๐คญ', '๐ฅฑ', '๐คซ', '๐คฅ', '๐ถ', '๐', '๐', '๐ฌ',
      '๐', '๐ฏ', '๐ฆ', '๐ง', '๐ฎ', '๐ฒ', '๐ด', '๐คค', '๐ช', '๐ต', '๐ค',
      '๐ฅด', '๐คข', '๐คฎ', '๐คง', '๐ท', '๐ค', '๐ค', '๐ค', '๐ค ', '๐', '๐ฟ',
      '๐น', '๐บ', '๐คก', '๐ฉ', '๐ป', '๐', 'โ ', '๏ธ๐ฝ', '๐พ', '๐ค', '๐',
      '๐บ', '๐ธ', '๐น', '๐ป', '๐ผ', '๐ฝ', '๐', '๐ฟ', '๐พ', '๐คฒ', '๐',
      '๐', '๐', '๐ค', '๐', '๐', '๐', 'โ', '๐ค', '๐ค', '๐ค', 'โ',
      '๐ค', '๐ค', '๐', '๐ค', '๐', '๐', '๐', '๐', 'โ', '๐ค',
      '๐', '๐', '๐ค', '๐ช', '๐', '๐', '๐', '๐ถ', '๐',
      '๐', '๐ถ', '๐ฑ', '๐ญ', '๐น', '๐ฐ', '๐ฆ', '๐ป', '๐ผ', '๐ป', 'โ',
      '๏ธ๐จ', '๐ฏ', '๐ฆ', '๐ฎ', '๐ท', '๐ฝ', '๐ธ', '๐ต', '๐', '๐', '๐',
      '๐', '๐', '๐ง', '๐ฆ', '๐ค', '๐ฃ', '๐ฅ', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆ',
      '๐บ', '๐', '๐ด', '๐ฆ', '๐ข', '๐ฆ', '๐ฆ', '๐', '๐ฆ', '๐', '๐ฆ',
      '๐ฆฅ', 'โค', '๏ธ๐งก', '๐', '๐', '๐', '๐', '๐ค', '๐ค', '๐ค', '๐',
      'โฎ', '๐ต', '๐ถ', 'โ', 'โ', 'โ', 'โ', '๏ธโพ', '๏ธ๐ฒ', 'ยฉ', '๏ธยฎ', '๏ธโ ',
      'โฃ', 'โฅ', '๏ธโฆ', '๏ธ๐', '๐ป', '๐ฅ', '๐จ', '๏ธ๐ท', 'โฐ', '๐', '๐', '๏ธ๐ง',
      'โ', '๏ธ๐ง', '๐ช', '๐ซ', '๐ฌ', '๐ญ', '๐', 'โ', '๐ฝ', '๏ธ๐พ', '๐น',
      '๐ธ', '๐ฅ', '๐ท', '๐ฅ', '๐ป', '๐บ', '๐ช', '๐ฉ', '๐ฟ', '๐ซ', '๐ฌ',
      '๐ญ', '๐', '๐ฐ', '๐ง', '๐ฅง', '๐จ', '๐', '๐ฃ', '๐ฎ', '๐', '๐',
      '๐', '๐ญ', '๐', '๐', '๐ฅ', '๐ง', '๐ฅ', '๐ณ', '๐ฅ', 'โ', 'โ',
      'โ', 'โ', 'โ', '๏ธ๐จ', '๏ธ๐ฉ', '๏ธโ', '๏ธ๐ง', '๏ธ๐ฆ', '๏ธโ', '๏ธ๐ฅ', '๏ธโ', '๐ค',
      '๏ธโ', '๏ธ๐', '๐', 'โญ', 'โก', '๐น', '๐ท', '๐', '๐']
  },
  actions: {
    getAllPosts ({ commit }) {
      return PostsRoutes.getAllPosts().then(
        (response) => {
          commit('getAllPostsSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('getAllPostsFailure')
          return Promise.reject(error)
        }
      )
    },
    getAllPostsFromOneUser ({ commit }, id) {
      return PostsRoutes.getAllPostsFromOneUser(id).then(
        (response) => {
          commit('getAllPostsFromOneUserSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('getAllPostsFromOneUserFailure')
          return Promise.reject(error)
        }
      )
    },
    getOnePost ({ commit }, id) {
      return PostsRoutes.getOnePost(id).then(
        (response) => {
          commit('getOnePostSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('getOnePostFailure')
          return Promise.reject(error)
        }
      )
    },
    createPost ({ commit }, formData) {
      return PostsRoutes.createPost(formData).then(
        (response) => {
          commit('createPostSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('createPostFailure')
          return Promise.reject(error)
        }
      )
    },
    updatePost ({ commit }, payload) {
      return PostsRoutes.updatePost(payload).then(
        (response) => {
          commit('updatePostSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('updatePostFailure')
          return Promise.reject(error)
        }
      )
    },
    deletePost ({ commit }, id) {
      return PostsRoutes.deletePost(id).then(
        (response) => {
          commit('deletePostSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('deletePostFailure')
          return Promise.reject(error)
        }
      )
    },
    sendPostReport ({ commit }, payload) {
      return PostsRoutes.sendPostReport(payload).then(
        (response) => {
          commit('sendPostReportSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('sendPostReportFailure')
          return Promise.reject(error)
        }
      )
    },
    getComments ({ commit }, id) {
      return PostsRoutes.getComments(id).then(
        (response) => {
          commit('getCommentsSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('getCommentsFailure')
          return Promise.reject(error)
        }
      )
    },
    getOneComment ({ commit }, payload) {
      return PostsRoutes.getOneComment(payload).then(
        (response) => {
          commit('getOneCommentSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('getOneCommentFailure')
          return Promise.reject(error)
        }
      )
    },
    createComment ({ commit }, payload) {
      return PostsRoutes.createComment(payload).then(
        (response) => {
          commit('createCommentSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('createCommentFailure')
          return Promise.reject(error)
        }
      )
    },
    updateComment ({ commit }, payload) {
      return PostsRoutes.updateComment(payload).then(
        (response) => {
          commit('updateCommentSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('updateCommentFailure')
          return Promise.reject(error)
        }
      )
    },
    deleteComment ({ commit }, payload) {
      return PostsRoutes.deleteComment(payload).then(
        (response) => {
          commit('deleteCommentSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('deleteCommentFailure')
          return Promise.reject(error)
        }
      )
    },
    sendCommentReport ({ commit }, payload) {
      return PostsRoutes.sendCommentReport(payload).then(
        (response) => {
          commit('sendCommentReportSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('sendCommentReportFailure')
          return Promise.reject(error)
        }
      )
    },
    createLike ({ commit }, id) {
      return PostsRoutes.createLike(id).then(
        (response) => {
          commit('createLikeSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('createLikeFailure')
          return Promise.reject(error)
        }
      )
    },
    getLikes ({ commit }, id) {
      return PostsRoutes.getLikes(id).then(
        (response) => {
          commit('getLikesSuccess', response)
          return Promise.resolve(response)
        },
        (error) => {
          commit('getLikesFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    getAllPostsSuccess (state, response) {
      state.allPosts = response.data
    },
    getAllPostsFailure () {},
    getAllPostsFromOneUserSuccess (state, response) {
      state.allPostsFromUser = response.data
    },
    getAllPostsFromOneUserFailure () {},
    getOnePostSuccess (state, response) {
      state.postInfo = response.data
    },
    getOnePostFailure () {},
    createPostSuccess (state) {
      state.createdPost = 'Posted'
    },
    createPostFailure () {},
    updatePostSuccess (state) {
      state.updatedPost = 'Updated'
    },
    updatePostFailure () {},
    deletePostSuccess (state) {
      state.deletedPost = 'Deleted'
    },
    deletePostFailure () {},
    sendPostReportSuccess () {},
    sendPostReportFailure () {},
    getCommentsSuccess (state, response) {
      state.allComments = response.data
    },
    getCommentsFailure () {},
    getOneCommentFailure () {},
    getOneCommentSuccess () {},
    createCommentSuccess () {},
    createCommentFailure () {},
    updateCommentSuccess () {},
    updateCommentFailure () {},
    deleteCommentSuccess () {},
    deleteCommentFailure () {},
    sendCommentReportSuccess () {},
    sendCommentReportFailure () {},
    createLikeSuccess () {},
    createLikeFailure () {},
    getLikesSuccess (state, response) {
      state.likes = response.data
    },
    getLikesFailure () {}
  }
}
