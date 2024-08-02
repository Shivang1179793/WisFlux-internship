const img1: Element = document.querySelector("#img1")
const img2: Element = document.querySelector("#img2")
const img3: Element = document.querySelector("#img3")

const keyframes: Keyframe = {
    transform: "translateX(-4em)"
}

const options: KeyframeAnimationOptions = {
    duration: 1000,
    iterations: 5,
    direction: "alternate"
}


const executeAnimations = async (): Promise<void> => {

    let anim1: Animation = img1.animate(keyframes, options)

    let fin_anim_1: Animation = await anim1.finished

    let anim2: Animation = img2.animate(keyframes, options)

    let fin_anim_2 : Animation = await anim2.finished

    let anim3 : Animation = img3.animate(keyframes, options)

    let fin_anim_3 : Animation = await anim3.finished

}

executeAnimations()
