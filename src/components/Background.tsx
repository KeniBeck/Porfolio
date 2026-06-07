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
          -top-62.5
          h-200
          w-200
          -translate-x-1/2
          rounded-full
          blur-[180px]
          opacity-40
        "
                style={{
                    backgroundColor: glowColor,
                }}
            />
        </div>
    );
}