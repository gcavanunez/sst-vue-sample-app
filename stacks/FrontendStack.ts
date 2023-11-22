import { StackContext, StaticSite } from 'sst/constructs';

export function Site({ stack, app }: StackContext) {
    // Define our Vue app
    const site = new StaticSite(stack, 'site', {
        path: 'packages/site',
        buildCommand: 'pnpm run build',
        buildOutput: 'dist',
    });

    // Show the url in the output
    stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url,
    });
}
