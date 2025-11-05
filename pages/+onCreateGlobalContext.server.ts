import { GlobalContextServer } from "vike/types";

export async function onCreateGlobalContext(ctx: GlobalContextServer) {
    console.log("onCreateGlobalContext");
    for (const page of Object.values(ctx.pages)) {
        console.log(`Page: ${page.route}`);
        console.log(`    Metadata: ${page.config?.metadata}`);
    }

    ctx.toc = {};
    
}
