import { Ref, ref } from "vue";

export const useAccordion = (accordionContent: Ref<HTMLElement | undefined>) => {
    const visible = ref<boolean>(false);

    const toggleAccordion = () => {
        visible.value = !visible.value;

        if (visible.value) {
            if (accordionContent.value) {
                let contentHeight = accordionContent.value.scrollHeight;
                accordionContent.value.style.height = `${contentHeight}px`;
            }
        } else {
            if (accordionContent.value) {
                let transition = accordionContent.value.style.transition;
                let contentHeight = accordionContent.value.scrollHeight;
                accordionContent.value.style.transition = "";

                requestAnimationFrame(function () {
                    if (accordionContent.value) {
                        accordionContent.value.style.height = `${contentHeight}px`;
                        accordionContent.value.style.transition = transition;
                    }

                    requestAnimationFrame(function () {
                        if (accordionContent.value) {
                            accordionContent.value.style.height = "0px";
                        }
                    });
                });
            }
        }
    };

    return { toggleAccordion, visible };
};
