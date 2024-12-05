'use client';

import React, { useState } from 'react';
import { TagInput, TagInputProps } from '@/once-ui/components';
import styles from './tagInput.module.scss';

const TagInputComponent: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['Tag1', 'Tag2']);

    const handleTagsChange: TagInputProps['onChange'] = (newTags) => {
        setTags(newTags);
        console.log('Updated tags:', newTags); // 可替換成你的業務邏輯
    };

    return (
        <Flex direction="column" gap="16" style={{ padding: '20px' }}>
            <Text variant="h5">Tags Management</Text>
            <TagInput
                id="example"
                value={tags}
                onChange={handleTagsChange}
                label="Enter Tags"
                placeholder="Type and press Enter or ',' to add"
                style={{
                    border: '1px solid var(--color-neutral-weak)',
                    borderRadius: 'var(--border-radius-base)',
                }}
            />
        </Flex>
    );
};

export default TagInputComponent;