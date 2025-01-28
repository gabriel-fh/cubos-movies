import { useEffect } from 'react';
import Button from '../Button';
import { Icon } from '@iconify/react/dist/iconify.js';

type PaginationProps = {
  totalPages: number;
  active: number;
  setActive: (page: number) => void;
};

const Pagination = ({ totalPages, active, setActive }: PaginationProps) => {
  const total = totalPages > 500 ? 500 : totalPages;
  const current = active > total ? total : active < 1 ? 1 : active;
  
  useEffect(() => {
    if (current > total) {
      setActive(total);
    }
  }, [current, total, setActive]);

  const getItemProps = (idx: number) => ({
    disabled: current === idx,
    onClick: () => setActive(idx),
  });

  const next = () => {
    if (current === total) return;
    setActive(current + 1);
  };

  const prev = () => {
    if (current === 1) return;
    setActive(current - 1);
  };

  const getVisiblePages = () => {
    const pages = [];
    let minValue = 3;
    if (current <= minValue) {
      if(minValue > total) minValue = total;
      for (let i = 1; i <= minValue; i++) {
        pages.push(i);
      }
      if (total > 4) pages.push('...');
      if (total > 3) pages.push(total);
    } else {
      pages.push(1);
      if (current > 3) pages.push('...');
      
      if (current < total - 2) {
        pages.push(current);
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
    <div className="w-full flex items-center justify-center">
      <div className="p-4 lg:p-6 flex items-center flex-wrap gap-2">
        <Button
          variant="primary"
          className="!px-2 !py-2 sm:!px-5 sm:!py-3 flex items-center"
          onClick={prev}
          disabled={current === 1}
        >
          <Icon icon={'lets-icons:expand-left'} className="text-mauve-12 text-xl" />
        </Button>

        <div className="flex items-center gap-2">
          {getVisiblePages().map((page, idx) => (
            <Button
              key={idx}
              variant='primary'
              className="!px-3 !py-2 sm:!px-5 sm:!py-3 !text-sm"
              {...(typeof page === 'number' ? getItemProps(page) : {})}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="primary"
          className="!px-2 !py-2 sm:!px-5 sm:!py-3 flex items-center gap-2"
          onClick={next}
          disabled={current === total}
        >
          <Icon icon={'lets-icons:expand-right'} className="text-mauve-12 text-xl" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
