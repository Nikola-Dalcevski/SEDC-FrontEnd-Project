import * as Elements from '../elements/elements'
export function clearBikeContextAndRenderText (text) {
    Elements.bikeContext.html("");
    Elements.asideNav.css("display", "none");
    Elements.bikeContext.removeClass("col-lg-9");
    Elements.bikeContext.append(text);
}