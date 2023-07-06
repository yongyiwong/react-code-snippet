import styled from 'styled-components';
import { DurationType } from './type';

type TransationOpacityType = DurationType & {
  startOpacity?:number;
  endOpacity?: number;
}
export const TransitionOpacityExitContainer = styled.div<TransationOpacityType>(
  ({duration=500, startOpacity=1, endOpacity=0}) => [
    `
  .exitAnimation-exit {
    opacity: ${startOpacity};
  }
  .exitAnimation-exit-active {
    opacity: ${endOpacity};
    transition: opacity ${duration}ms;
  }
`,
  ],
);

export const TransitionOpacityEnterContainer = styled.div<TransationOpacityType>(({ duration = 500, startOpacity=0, endOpacity=1}) => [`
  .enterAnimation-enter {
    opacity: ${startOpacity};
  }
  .enterAnimation-enter-active {
    opacity: ${endOpacity};
    transition: opacity ${duration}ms
  }
`]);
