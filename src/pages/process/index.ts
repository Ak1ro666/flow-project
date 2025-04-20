import { WithFallbacks } from '@/shared/lib/withFallbacks';
import { PageAsync } from './page.async';

const Page = WithFallbacks(PageAsync);

export { Page as ProcessPage };
