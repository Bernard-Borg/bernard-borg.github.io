<script setup lang="ts">
import { computed } from "vue";
import HoverLink from "@/components/HoverLink.vue";

const age = computed(() => {
    return Math.abs(new Date(Date.now() - new Date("04/08/2001").getTime()).getUTCFullYear() - 1970);
});

const yearsOfLearning = computed(() => {
    return Math.abs(new Date(Date.now() - new Date("01/09/2014").getTime()).getUTCFullYear() - 1970);
});
</script>

<template>
    <p class="text-lg leading-7 text-justify mb-3" ref="paragraph">
        Hello! My name is <b>Bernard Borg</b>. I'm a {{ age }}-year-old Fullstack Software Developer from
        <HoverLink
            text="Malta"
            link="https://www.google.com/maps/place/35%C2%B054'21.4%22N+14%C2%B026'09.9%22E/@35.905934,14.4338833,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.905934!4d14.436072"
            :openInNewTab="true"
        >
            <inline-svg
                id="maltese-flag"
                class="inline"
                src="/malta.svg"
                title="Maltese flag"
                height="50px"
            /> </HoverLink
        >. I have been learning Computing/Software Development for the past {{ yearsOfLearning }} years. My journey into
        the world of software started out with a love for Java. The first thing I got obsessed with was JOptionPanes. I
        used to make use of them in all my projects, soon after learning about more advanced GUI technologies such as
        AWT and Swing. I enjoyed tinkering around, creating small programs, eventually creating a small
        <HoverLink text="2D maze game"><img src="/BAmazed.png" class="w-96" /></HoverLink>
        for my MATSEC A-level project (which I completed through private lessons, while studying Chemistry and Pure
        Mathematics for my A-levels).
    </p>
    <p class="text-lg leading-7 text-justify">
        Later on, I started completing online courses on various technologies, namely Java and Kotlin (through
        <HoverLink text="Hyperskill.org" link="https://hyperskill.org/tracks" :openInNewTab="true" />, which I can't
        recommend enough), as well as Javascript, HTML, CSS, Python and react (initially through
        <HoverLink text="Codecademy" link="https://www.codecademy.com/" :openInNewTab="true" />, and finally through
        <HoverLink text="freeCodeCamp" link="https://www.freecodecamp.org/" :openInNewTab="true"
            ><img src="/freeCodeCampCert.png" class="w-96" /></HoverLink
        >).
    </p>
</template>

<style>
#maltese-flag {
    outline: 1px solid gray;
    border-radius: 2px;
}
</style>
