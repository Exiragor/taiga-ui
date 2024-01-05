import {TuiDocumentationApiPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Deep / Select', () => {
    const deepPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    deepPaths.forEach(path =>
        test(path, async ({page}) => {
            await tuiMockImages(page);
            await tuiGoto(page, `${path}/API`);

            const api = new TuiDocumentationApiPagePO(page);
            const rows = await api.getRows();

            api.setTimeout(rows.length);

            for (const row of rows) {
                const select = await api.getSelect(row);
                const name = await api.getNameProperty(row);

                if (!select) {
                    continue;
                }

                await select.scrollIntoViewIfNeeded();
                await api.focusOnBody();
                await page.waitForTimeout(100);
                await select.click();

                const options = await api.getOptions();
                const defaultIndex = await api.getDefaultSelectedOptionIndex(options);

                for (const [index, option] of options.entries()) {
                    await option.click();
                    await page.waitForTimeout(200);
                    await api.hideNotifications();
                    await api.focusOnBody();

                    await expect(api.apiPageExample).toHaveScreenshot(
                        `deep-${path}__${name}-select-option-${index}.png`,
                    );

                    await select.click();
                }

                await api.focusOnBody();
                await select.click();
                await page.waitForTimeout(200);

                const cleaner = await api.getCleaner(select);

                if (cleaner) {
                    await cleaner.click();
                } else {
                    await options[defaultIndex]?.click();
                }

                await api.focusOnBody();
            }
        }),
    );
});