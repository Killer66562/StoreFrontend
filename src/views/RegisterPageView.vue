<template>
    <div class="container">
        <h2 class="text-center">註冊</h2>
        <div class="text-center mb-3">已有帳號？<RouterLink to="/login">登入</RouterLink></div>
        <form @submit.prevent="">
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">使用者名稱</label>
                    <input id="username-input" class="form-control" type="text" maxlength="20">
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">電子郵件</label>
                    <input id="username-input" class="form-control" type="email" maxlength="100">
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">密碼</label>
                    <input id="username-input" class="form-control" type="password" maxlength="100">
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
        </form>
        <div class="d-flex flex-row justify-content-center">
            <button type="submit" class="btn btn-success">點我立即註冊</button>
        </div>
    </div>
</template>