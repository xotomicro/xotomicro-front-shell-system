import {ApplicationEnum} from "@app/enums/ApplicationEnum"
import {navigateToUrl} from "single-spa"

class Router {
    static publicRoutes = [ApplicationEnum.HOOK_SYSTEM, ApplicationEnum.AUTH_SERVICE]

    static authRoutes = [ApplicationEnum.EVENT_SERVICE, ApplicationEnum.ORDER_SERVICE, ApplicationEnum.PRODUCT_SERVICE, ApplicationEnum.USER_SERVICE]

    static canAccessRoute(route: ApplicationEnum) {
        let isAuthorized = true
        if (this.authRoutes.includes(route)) {
            if (!sessionStorage.getItem("token")) {
                isAuthorized = false
                navigateToUrl("/")
            }
        }
        return isAuthorized
    }
}

export {Router}
