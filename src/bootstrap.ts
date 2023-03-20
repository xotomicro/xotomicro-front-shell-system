/* eslint-disable import/no-unresolved */
// @ts-nocheck

import {start, registerApplication} from "single-spa"
import {ApplicationEnum} from "./enums/ApplicationEnum"
import {GlobalEventDistributor} from "./events/globalEvents"
import {Router} from "./router/Router"

const globalEventDistributor: GlobalEventDistributor = new GlobalEventDistributor()

import("./style/overwrite.scss")

/**
 * Register applications here
 */

registerApplication(
    ApplicationEnum.HOOK_SYSTEM,
    () => import("xotomicro_front_hook_system/ApplicationPage"),
    () => Router.canAccessRoute(ApplicationEnum.HOOK_SYSTEM),
    {globalEventDistributor}
)
registerApplication(
    ApplicationEnum.EVENT_SERVICE,
    () => import("xotomicro_front_event_service/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/xotomicro-front-event-service") && Router.canAccessRoute(ApplicationEnum.EVENT_SERVICE),
    {globalEventDistributor}
)
registerApplication(
    ApplicationEnum.ORDER_SERVICE,
    () => import("xotomicro_front_order_service/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/xotomicro-front-order-service") && Router.canAccessRoute(ApplicationEnum.ORDER_SERVICE),
    {globalEventDistributor}
)
registerApplication(
    ApplicationEnum.PRODUCT_SERVICE,
    () => import("xotomicro_front_product_service/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/xotomicro-front-product-service") && Router.canAccessRoute(ApplicationEnum.PRODUCT_SERVICE),
    {globalEventDistributor}
)
registerApplication(
    ApplicationEnum.USER_SERVICE,
    () => import("xotomicro_front_user_service/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/xotomicro-front-user-service") && Router.canAccessRoute(ApplicationEnum.USER_SERVICE),
    {globalEventDistributor}
)
registerApplication(
    ApplicationEnum.AUTH_SERVICE,
    () => import("xotomicro_front_auth_service/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/xotomicro-front-auth-service") && Router.canAccessRoute(ApplicationEnum.AUTH_SERVICE),
    {globalEventDistributor}
)

start()
