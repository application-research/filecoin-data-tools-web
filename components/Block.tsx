import { BlockTypeEnum } from '@root/common/types';
import LogoGrid from './LogoGrid';

export function Block({ block }) {
  switch (block.type) {
    case (block.type = BlockTypeEnum.LOGO_GRID):
      return <LogoGrid {...block} />;
    default:
      return <></>;
  }
}
