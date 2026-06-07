type BackgroundProps = {
    glowColor: string;
};

export default function AnimatedBackground({
    glowColor,
}: BackgroundProps) {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
            <div
                className="
          absolute
          left-1/2
          -top-75
          h-200
          w-200
          -translate-x-1/2
          blur-[80px]
          opacity-50
        "
                style={{
                    background: `radial-gradient(
                    circle,
                    ${glowColor} 0%,
                    transparent 100%
                    )`,
                }}
            />
        </div>
    );
}