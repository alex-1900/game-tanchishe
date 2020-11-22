import { container } from "../../Common/Container";
import ServiceDocument from "../../Service/Document";
import Entity from "../Entity";

export default class Background extends Entity {

    private docService: ServiceDocument;

    public constructor() {
        super();
        this.docService = container.get(ServiceDocument.KEY);
    }

    public create() {
        const doc = this.docService;
        const dom = doc.options(doc.box(), {
            css: {
                width: '100%',
                height: '100%',
                background: 'yellowgreen'
            }
        });
        return dom;
    }
}
