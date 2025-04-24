import Option from './option';
import DocumentScannerIcon from '../../assets/icons/document-scanner.svg';
import ExportShareIcon from '../../assets/icons/export-share.svg';
import SignStampIcon from '../../assets/icons/sign-stamp.svg';
import AdvancedFiltersIcon from '../../assets/icons/advanced-filters.svg';
import BatchScanningIcon from '../../assets/icons/batch-scanning.svg';
import type { OptionItem } from './type';

const allOptions: OptionItem[] = [
  {
    label: 'Document Scanner',
    Icon: DocumentScannerIcon,
    path: '',
  },
  {
    label: 'Sign & Stamp',
    Icon: SignStampIcon,
    path: 'sign-stamp',
  },
  {
    label: 'Batch Scanning',
    Icon: BatchScanningIcon,
    path: 'batch-scanning',
  },
  {
    label: 'Advanced Filters',
    Icon: AdvancedFiltersIcon,
    path: 'advanced-filters',
  },
  {
    label: 'Export & Share',
    Icon: ExportShareIcon,
    path: 'export-share',
  },
];

function Options() {
  return (
    <div className="bg-white">
      <div className="snap-x snap-mandatory overflow-x-auto max-w-screen-2xl mx-auto flex [&>*:not(:last-child)]:border-r [&>*:not(:last-child)]:border-r-[#00000014]">
        {allOptions.map((v) => (
          <Option key={v.path} {...v} />
        ))}
      </div>
    </div>
  );
}

export default Options;
