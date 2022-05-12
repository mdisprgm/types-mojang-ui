declare module "mojang-minecraft-ui" {
    import * as mc from "mojang-minecraft";

    class FormResponse {
        readonly isCanceled: boolean;
    }

    class ActionFormData {
        constructor();
        body(bodyText: string): ActionFormData;
        button(text: string, iconPath?: string): ActionFormData;
        /**
         * This function can throw errors
         * @param player target
         */
        show(player: mc.Player): Promise<ActionFormResponse>;
        title(titleText: string): ActionFormData;
    }

    class ActionFormResponse extends FormResponse {
        readonly selection: number;
    }

    class MessageFormData {
        constructor();
        body(bodyText: string): MessageFormData;
        button1(text: string): MessageFormData;
        button2(text: string): MessageFormData;
        /**
         * This function can throw errors
         * @param player target
         */
        show(player: mc.Player): Promise<MessageFormResponse>;
        title(titleText: string): MessageFormData;
    }

    class MessageFormResponse extends FormData {
        readonly selection: number;
    }

    class ModalFormData {
        constructor();
        dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
        icon(iconPath: string): ModalFormData;
        /**
         * This function can throw errors
         * @param player target
         */
        show(player: mc.Player): Promise<ModalFormResponse>;
        slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData;
        textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
        title(titleText: string): ModalFormData;
        toggle(label: string, defaultValue?: boolean): ModalFormData;
    }

    class ModalFormResponse extends FormData {
        readonly formValues: any[];
    }
}
