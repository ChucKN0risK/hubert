import Text from '../../01-atoms/Text/Text';
import Pill from '../../01-atoms/Pill/Pill';
import { type Tag } from '../../../types/tags.types';
import './TagList.scss';
import { useRef, useState } from 'react';

interface TagListProps {
  tags: Tag[] | undefined;
  existingTags: Tag[] | undefined;
  onTagDeletion: (tagId: string) => void;
  onTagCreation: (tag: string) => void;
  onTagAddition: (tag: string) => void;
}

function TagList({ tags, existingTags, onTagCreation, onTagAddition, onTagDeletion }: TagListProps) {
  const [newTag, setNewTag] = useState('');
  const [showExistingTags, toggleExistingTags] = useState(false);
  const [filteredExistingTags, setFilteredExistingTags] = useState([...(existingTags || [])]);
  const dropdown = useRef<HTMLUListElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.currentTarget.value;
    setNewTag(tag);

    if (tag.trim() !== '') {
      toggleExistingTags(true)
      setFilteredExistingTags([...(existingTags || []).filter(existingTag => existingTag.name.includes(tag.toLowerCase()))]);
    } else {
      toggleExistingTags(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const tag = e.currentTarget.value;
      setNewTag(tag);
      onTagAddition(tag);
      reset();
    }
  };

  const handleTagCreation = (newTag: string) => {
    onTagCreation(newTag);
    reset();
  }

  const reset = () => {
    toggleExistingTags(false);
    setNewTag('');
  };

  const getPlaceholder = () => tags?.length === 0 || tags === undefined ? 'Add a new tag...' : '';

  return (
    <div className='m-asset-tags'>
      <ul className='u-list-reset m-asset-tags__tags'>
        {tags?.map(tag =>
          <Pill
            key={tag.id}
            label={tag.name}
            tabIndex={0}
            role='button'
            onDelete={() => onTagDeletion(tag.id)}
          />
        )}
        <li className='m-asset-tags__add-tag'>
          <form action='post' onSubmit={(e) => e.preventDefault()}>
            <label className='u-visually-hidden' htmlFor='new-tag-name'>Add a new tag</label>
            <input
              id='new-tag-name'
              type='text'
              className='text-caption-1'
              autoComplete='off'
              onChange={e => handleChange(e)}
              onKeyDown={e => handleKeyDown(e)}
              value={newTag}
              placeholder={getPlaceholder()}
            />
          </form>
        </li>
      </ul>
      {showExistingTags && (
        <div className='m-asset-tags__dropdown'>
          <Text as='p' variant='body-3'>Select a tag or create one</Text>
          {filteredExistingTags.length === 0 ? (
            <button className='is-selected' onClick={() => handleTagCreation(newTag)}>
              <Text as='div' variant='caption-1'>
                Create <Pill label={newTag} />
              </Text>
            </button>
          ) : (
            <ul className='u-list-reset m-asset-tags__existing-tags' ref={dropdown}>
              {filteredExistingTags.map((tag, i) =>
                <li key={tag.id}>
                  <button className={i === 0 ? 'is-selected' : ''}>
                    <Pill label={tag.name} />
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default TagList;