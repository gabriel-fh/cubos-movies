import Button from '../Button';
import { Icon } from '@iconify/react/dist/iconify.js';

type PaginationProps = {
  totalPages: number;
  active: number;
  setActive: (page: number) => void;
};

const Pagination = ({ totalPages, active, setActive }: PaginationProps) => {
  const total = totalPages > 500 ? 500 : totalPages;

  const getItemProps = (idx: number) => ({
    disabled: active === idx,
    onClick: () => setActive(idx),
  });

  const next = () => {
    if (active === total) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const getVisiblePages = () => {
    const pages = [];
    let minValue = 3;
    if (active <= minValue) {
      if(minValue > total) minValue = total;
      for (let i = 1; i <= minValue; i++) {
        pages.push(i);
      }
      if (total > 4) pages.push('...');
      if (total > 3) pages.push(total);
    } else {
      pages.push(1);
      if (active > 3) pages.push('...');
      
      if (active < total - 2) {
        pages.push(active);
        pages.push('...');
        pages.push(total);
      } else {
        for (let i = total - 2; i <= total; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <div className="w-full flex items-center justify-center bg-mauve1">
      <div className="p-4 flex items-center flex-wrap gap-2">
        <Button
          variant="primary"
          className="px-2 py-2 flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <Icon icon={'lets-icons:expand-left'} className="text-mauve-12 text-xl" />
        </Button>

        <div className="flex items-center gap-2">
          {getVisiblePages().map((page, idx) => (
            <Button
              key={idx}
              variant='primary'
              className="px-3 py-2"
              {...(typeof page === 'number' ? getItemProps(page) : {})}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="primary"
          className="px-2 py-2 flex items-center gap-2"
          onClick={next}
          disabled={active === total}
        >
          <Icon icon={'lets-icons:expand-right'} className="text-mauve-12 text-xl" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
