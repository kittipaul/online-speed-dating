<template>
  <div class="navbar navbar-dark bg-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a href="#" v-on:click.prevent="goToMyProfile">
        <img id="logo" :src="background" alt="logoImage">
      </a>
    </div>
      <ul v-if="checkAuth()" class="nav navbar-nav navbar-right">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" v-on:click.prevent="goToEvents">Events</a></li>
          <li><a href="#" v-on:click.prevent="goToMyProfile">My Profile</a></li>
          <li><a href="#" v-on:click.prevent="goToEditProfile"><span class="glyphicon glyphicon-cog"></span></a></li>
          <li><a href=# v-on:click.prevent="logout">Logout</a></li>
        </ul>
      </ul>
      <form v-else class="navbar-form nav navbar-nav navbar-right">
        <div>
          <div class="form-group">
              <label class="sr-only">Email address</label>
              <input type="text" class="form-control" placeholder="username" v-model="user.username">
          </div>
          <div class="form-group">
              <label class="sr-only">Password</label>
              <input type="password" class="form-control" placeholder="Password" v-model="user.password">
          </div>
          <div class="form-group">
              <button class="btn btn-primary btn-block" v-on:click="login()">Sign in</button>
          </div>
        </div>
      </form>
    </div><!-- /.container-fluid -->
  </div>
</template>

<style>
  .navbar {
    background-color: black;
  }
</style>