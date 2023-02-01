<template>
    <div class="flex absolute right-0 top-0 z-50">
        <div id="socials-decorator"></div>
        <div id="socials" class="text-3xl gap-4 p-3 flex text-black">
            <a
                class="pointer-events-auto rounded-md bg-blue-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-blue-500"
                href="mailto:bernard.borg36@gmail.com"
                >Contact</a
            >
            <a
                href="https://github.com/Bernard-Borg/"
                target="_blank"
                class="hover:scale-110"
            >
                <i class="fa-brands fa-github"></i>
            </a>
            <a
                href="https://stackoverflow.com/users/13426975/bernard-borg"
                target="_blank"
                class="hover:scale-110"
            >
                <i class="fa-brands fa-stack-overflow"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/bernard-borg/"
                target="_blank"
                class="hover:scale-110"
            >
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
    </div>
</template>

<style>
#socials {
    background: white;
    border-bottom-left-radius: 5px;
    border-bottom: 1px solid black;
}

#socials-decorator {
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-bottom: 58px solid transparent;
    border-right: 21px solid black;
}

#socials-decorator:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    border-top: 0px solid transparent;
    border-bottom: 58px solid transparent;
    border-right: 21px solid white;
    left: 1px;
}
</style>
