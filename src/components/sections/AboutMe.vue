<script setup lang="ts">
import { computed } from "vue";
import HoverLink from "@/components/HoverLink.vue";

const age = computed(() => {
    return Math.abs(
        new Date(
            Date.now() - new Date("04/08/2001").getTime()
        ).getUTCFullYear() - 1970
    );
});
</script>

<template>
    <p class="text-lg leading-7 text-justify">
        Hello! My name is <b>Bernard Borg</b>. I'm a {{ age }}-year-old
        Fullstack Software Developer from Malta (
        <a
            href="https://www.google.com/maps/place/35%C2%B054'21.4%22N+14%C2%B026'09.9%22E/@35.905934,14.4338833,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.905934!4d14.436072"
            target="_blank"
        >
            <inline-svg
                id="maltese-flag"
                class="inline"
                src="/malta.svg"
                title="Maltese flag"
                height="20px"
            ></inline-svg>
            ). I have been learning Computing/Software Development for the past
            9 years. My journey into the world of software started out with a
            love for Java. The first thing I got obsessed with was
            <HoverLink
                text="JOptionPanes"
                link="https://www.google.com/search?q=joptionpane&oq=JOptionPane"
            />
            . I used to make use of them in all my projects, soon after learning
            about more advanced GUI technologies such as AWT and Swing. I
            enjoyed tinkering around, creating small programs, eventually
            creating a 2D maze game for my SEC O-level project.
        </a>
    </p>
    <p class="text-lg leading-7 text-justify"></p>
</template>

<style>
#maltese-flag {
    outline: 1px solid gray;
    border-radius: 2px;
}
</style>
