import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlFinancialAccountingAccountFiscalYear extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "code";
  }

  // TODO key value

  protected getAsyncIteratorZen(args: ControlSelectZenArgs): AsyncIterator<any> {
    const params = new URLSearchParams();

    // q
    {
      const q: string[] = [];

      // text
      if (args?.text) {
        const tmp: string[] = [];
        if (Number(args.text) === Number.parseInt(args.text, 10)) {
          tmp.push(`id==${Number.parseInt(args.text, 10)}`);
        }
        tmp.push(`code=ilike=${`'${args.text}%'`}`);
        this.pushFilter(tmp, "fullDescription", args.text, "%", "%");
        q.push(`(${tmp.join(",")})`); // OR
      }

      // filter
      if (args?.filter) {
        q.push(args.filter);
      }
      // control must have a filter
      else {
        q.push("id==-1");
      }

      if (q.length) {
        params.append("q", q.join(";")); // AND
      }
    }

    // order
    if (args?.order) {
      params.append("order", args.order);
    }

    return new AsyncIteratorZen(
      `/financial/accounting/accountFiscalYear${
        params.toString() ? `?${params.toString()}` : ""
      }`,
    );
  }

  protected getString(value: any): string | null {
    return value ? `${value.code}, ${value.fullDescription}` : null;
  }
}
