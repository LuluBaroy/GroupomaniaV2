<template>
  <main>
    <!--ACCOUNT CURRENT USER - SEE COMPONENT 'account_currentUser.vue'-->
    <account-current-user v-if="currentUser.id == this.$route.params.id"></account-current-user>

    <!--ACCOUNT OTHER USER - SEE COMPONENT 'account_otherUser.vue'-->
    <account-other-user v-else></account-other-user>
  </main>
</template>

<script>
import accountCurrentUser from '@/components/account_currentUser.vue'
import accountOtherUser from '@/components/account_otherUser.vue'
export default {
  name: 'profile',
  components: {accountCurrentUser, accountOtherUser},
  computed: {
    currentUser () {
      return this.$store.state.user.currentUser
    }
  },
  beforeCreate () {
    if (!this.$cookies.isKey('user')) {
      this.$router.push({name: 'auth'})
    } else {
      this.$store.dispatch('user/getCurrentUser')
      .catch(error => {
        if(error.message.split('code ')[1].includes('404')) {
          this.$router.push({name: 'auth'})
        }
      })
    }
  }
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
  i{
    font-size: 20px;
  }
  #containerbg{
    box-shadow: 0 0 12px grey;
    background-color: #F7F7F7;
  }
  .card-body{
    border: 4px solid #2C3F5F;
    box-shadow: 0 0 12px black;
    flex: 0 0 70%;
  }
</style>
