<template>
    <div class="default-layout__container">
        <MainLayoutHeader></MainLayoutHeader>
        <slot></slot>
    </div>
</template>

<style>
.default-layout__container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>