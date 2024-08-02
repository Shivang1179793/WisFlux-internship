var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const keyframes = {
    transform: "translateX(-4em)"
};
const options = {
    duration: 1000,
    iterations: 5,
    direction: "alternate"
};
const executeAnimations = () => __awaiter(this, void 0, void 0, function* () {
    let anim1 = img1.animate(keyframes, options);
    let fin_anim_1 = yield anim1.finished;
    let anim2 = img2.animate(keyframes, options);
    let fin_anim_2 = yield anim2.finished;
    let anim3 = img3.animate(keyframes, options);
    let fin_anim_3 = yield anim3.finished;
});
executeAnimations();
//# sourceMappingURL=app.js.map