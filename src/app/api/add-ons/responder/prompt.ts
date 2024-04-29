import { IRequestBody } from "@/types/api/reqBody";

export const responderPrompt = (options: {
    receivedMail: string;
    details?: IRequestBody;
}): string => {
    if (!options.details) {
        return `Received mail:
      "${options.receivedMail}"
      
      Task:
      Write response of this received mail as a business perspective.
      Response template:
      <Subject here>
      <Content here>
      <Regards here>

      Note:
      Response does not contain more than 350 tokens.`;
    } else {
        return `Received mail:
      "${options.receivedMail}"
      
      Task:
      Respond on this mail as a business perspective.
      
      Response template:
      <Subject here>
      <Content here>
      <Regards here with business-name: ${options.details!.business_name}, email: ${options.details!.contact?.email} and mobile-no.: ${options.details!.contact?.phone}>
      
      Note:
      Response does not contain more than 350 tokens.`;
    }
};
