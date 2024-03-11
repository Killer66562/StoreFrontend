<script setup lang="ts">
import DropdownMenu from './navbar/DropdownMenu.vue';
import DropdownItem from './navbar/DropdownItem.vue';
import DropdownDivider from './navbar/DropdownDivider.vue';
import NavLink from './navbar/NavLink.vue';
import NavbarCollapse from './navbar/NavbarCollapse.vue';
</script>

<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand"><h1>商店</h1></RouterLink>
                <NavbarCollapse collapse-id="collapseTest">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/">ABC</NavLink>
                        <DropdownMenu dropdown-id="test" dropdown-text="Test" disabled>
                            <DropdownItem to="/">Test</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem to="/">Test2</DropdownItem>
                        </DropdownMenu>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" @submit.prevent="">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </NavbarCollapse>
            </div>
        </nav>
    </div>
</template>