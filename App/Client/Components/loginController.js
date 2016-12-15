
import template from '../Templates/loginTemplate.vue';
const login = {
  template: template.template,
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login: function() {
      this.$http.post('/auth/login', {
        username: this.username,
        password: this.password
      })
      .then((res) => {
        var body = res.body;
        // this.$http.get('/api/events')
        //   .then((res) => {
        //     this.$store.commit('setAllEvents', res.body);
        //   });
        this.$store.commit('setUser', body);
        this.$store.commit('setSavedEvents', body.events);
        this.$router.push('/myprofile/' + this.username);
        console.log("this.$router", this.$router)
      })
      .catch((err) => console.error(err));
    }
  },
};

export default login;
