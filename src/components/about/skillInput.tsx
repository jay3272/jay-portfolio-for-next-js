// src/components/SkillsInput.tsx
"use client";

import { useState } from 'react';
import { TagInput } from '@/once-ui/components';

export default function SkillsInput() {
    const [skills, setSkills] = useState<string[]>([]);

    const handleSkillsChange = (value: string[]) => {
        setSkills(value);
    };

    return (
        <div>
            <TagInput
                id="skills"
                value={skills}
                onChange={handleSkillsChange}
                label="Add Skills"
                placeholder="Enter a skill and press Enter"
            />
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}